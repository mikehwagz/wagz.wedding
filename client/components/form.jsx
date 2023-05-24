import { component } from 'picoapp'
import { createRoot } from 'react-dom/client'
import React, { useState, useMemo, useCallback, useRef, createContext, useContext } from 'react'
import algoliasearch from 'algoliasearch/dist/algoliasearch-lite.esm.browser.js'
import { createAutocomplete } from '@algolia/autocomplete-core'
import { getAlgoliaResults } from '@algolia/autocomplete-preset-algolia'
import classNames from 'classnames'
import { AnimatePresence, motion, useWillChange } from 'framer-motion'

const searchClient = algoliasearch('WU6A99GNOQ', 'a737c08ff3857a1aa3a6f18f4f6b1b4c')

export default component((node, ctx) => {
  const root = createRoot(node)
  root.render(<App />)
})

function App() {
  const [loading, setLoading] = useState(false)
  const [autoFocus, setAutoFocus] = useState(false)
  const [step, setStep] = useState(1)
  const [person, setPerson] = useState(null)

  const handleNameAutocompleteChange = useCallback(async id => {
    setLoading(true)
    const person = await chillFetch(`/api/person?id=${id}`)
    setPerson(person)
    setLoading(false)
  }, [])

  const handleResetClick = useCallback(() => {
    setAutoFocus(true)
    setPerson(null)
  }, [])

  const handleResponseChange = useCallback(ev => {
    const value = { Yes: true, No: false }[ev.target.value]
    const index = +ev.target.name.split('_')[1]

    setPerson(prevPerson => ({
      ...prevPerson,
      ...(isNaN(index)
        ? {
            [ev.target.name]: value,
          }
        : {
            group: prevPerson.group.map((p, i) => ({
              ...p,
              isAttending: i === index ? value : p.isAttending,
            })),
          }),
    }))
  }, [])

  const handleSubmit = useCallback(
    async ev => {
      ev.preventDefault()

      // filter out the isAttending fields from the form data since they are already
      // stored as booleans in the person object
      const { isAttending, plusOneIsAttending, ...data } = Object.fromEntries(
        new FormData(ev.target).entries(),
      )

      if (step === 1 && person.isAttending && (person.hasPlusOne || person.group.length > 0)) {
        setPerson(prevPerson => ({ ...prevPerson, ...data }))
        setStep(2)
      } else {
        setLoading(true)

        await chillFetch('/api/person', {
          method: 'PUT',
          body: JSON.stringify({ ...person, ...data }),
        })

        setStep(3)
        setLoading(false)
      }
    },
    [step, person],
  )

  const DEFAULT_DURATION = 0.5
  const DEFAULT_TRANSITION = { ease: [1, 0, 0, 1], duration: DEFAULT_DURATION }

  const willChange = useWillChange()

  const NAME_LAYOUT_PROPS = {
    layout: 'position',
    layoutId: 'name',
    transition: DEFAULT_TRANSITION,
    style: { willChange },
  }

  const STEP_CONTAINER_PROPS = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
    transition: DEFAULT_TRANSITION,
    style: { willChange },
  }

  return (
    <div className="w-full h-full relative">
      <div className="relative w-full h-full max-w-[45.2rem] mx-auto">
        <AnimatePresence initial={false} mode="popLayout">
          <motion.div key={step} {...STEP_CONTAINER_PROPS}>
            {step === 1 &&
              (person === null ? (
                <div className="pt-140">
                  <motion.div {...NAME_LAYOUT_PROPS}>
                    <NameAutocomplete
                      onChange={handleNameAutocompleteChange}
                      autoFocus={autoFocus}
                      loading={loading}
                    />
                  </motion.div>
                </div>
              ) : !person.hasResponded ? (
                <motion.div {...NAME_LAYOUT_PROPS}>
                  <form className="space-y-30" onSubmit={handleSubmit}>
                    <label className="block text-16 -tracking-1 leading-100 font-normal relative">
                      Your Name:
                      <input
                        className="text-20 leading-150 -tracking-1 w-full block p-8 border-b-1 border-dashed outline-none bg-tan focus:border-solid"
                        value={person?.name}
                        readOnly
                      />
                      <button
                        className="absolute top-[45%] right-0 pt-5 px-5 pb-3 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black rounded-7"
                        onClick={handleResetClick}
                        type="reset"
                      >
                        Reset
                      </button>
                    </label>
                    <motion.div
                      className="space-y-30"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        ...DEFAULT_TRANSITION,
                        ease: [0.25, 1, 0.5, 1],
                        delay: DEFAULT_DURATION / 2,
                      }}
                      style={{ willChange }}
                    >
                      <RadioGroup
                        label="Your Response:"
                        name="isAttending"
                        required
                        onChange={handleResponseChange}
                      >
                        <RadioItem value="Yes">Happily Accepts</RadioItem>
                        <RadioItem value="No">Regretfully Declines</RadioItem>
                      </RadioGroup>
                      <RadioGroup
                        label="Meal Selection:"
                        name="mealOption"
                        disabled={!person?.isAttending}
                        required={person?.isAttending}
                      >
                        <RadioItem>Chicken</RadioItem>
                        <RadioItem>Salmon</RadioItem>
                        <RadioItem>Vegetarian</RadioItem>
                      </RadioGroup>
                      <TextInput
                        label="Dietary Restrictions:"
                        name="dietaryRestrictions"
                        placeholder="e.g. Gluten free"
                        disabled={!person?.isAttending}
                      />
                      <div className="pt-10">
                        <button
                          className="block relative w-full rounded-full border-1 leading-100 p-12 hover:bg-black hover:text-tan focus-visible:bg-black focus-visible:text-tan outline-none transition-colors duration-300 ease-in-out"
                          type="submit"
                        >
                          <div
                            className={classNames('transition-opacity', {
                              'opacity-0': loading,
                            })}
                          >
                            {person?.hasPlusOne || person?.group?.length > 0
                              ? person?.isAttending
                                ? 'Proceed to next step'
                                : 'Submit'
                              : 'Submit'}
                          </div>
                          <div
                            className={classNames(
                              'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity',
                              {
                                'opacity-0': !loading,
                              },
                            )}
                          >
                            <div className="animate-bounce [animation-duration:0.5s]">♥</div>
                          </div>
                        </button>
                      </div>
                    </motion.div>
                  </form>
                </motion.div>
              ) : (
                <div className="text-center">
                  <p className="text-25 text-center mb-50">
                    Our records indicate that you have already submitted a response. If you need to
                    change your response, please{' '}
                    <a
                      className="border-b-1 border-dashed hover:border-solid"
                      href={`mailto:concierge@wagz.wedding?subject=RSVP%20Change%20Request%20for%20${person.name}`}
                    >
                      send us an email
                    </a>
                    .
                  </p>
                  <button
                    className="px-35 py-14 leading-100 bg-tan border-1 rounded-full hover:bg-black hover:text-tan transition-colors duration-300 ease-in-out"
                    onClick={handleResetClick}
                    type="reset"
                  >
                    Go Back
                  </button>
                </div>
              ))}
            {step === 2 && (
              <form className="space-y-30" onSubmit={handleSubmit}>
                {person?.group?.length > 1 ? (
                  <fieldset>
                    <legend className="text-16 -tracking-1 leading-100 font-normal mb-10">
                      Group Responses:
                    </legend>
                    <div className="grid grid-cols-2 gap-10">
                      {person?.group?.map((p, i) => (
                        <div
                          className="px-8 pt-5 pb-10 space-y-8 rounded-7 [box-shadow:_1px_1px_4px_rgba(0,_0,_0,_0.15)]"
                          key={p._id}
                        >
                          <RadioGroup
                            label={p.name}
                            name={`groupIsAttending_${i}`}
                            required
                            onChange={handleResponseChange}
                            size="small"
                          >
                            <RadioItem value="Yes">Accepts</RadioItem>
                            <RadioItem value="No">Declines</RadioItem>
                          </RadioGroup>
                          <RadioGroup
                            label="Meal Choice"
                            name={`groupMealOption_${i}`}
                            disabled={!person?.group?.[i]?.isAttending}
                            required={person?.group?.[i]?.isAttending}
                            size="small"
                          >
                            <RadioItem>Chicken</RadioItem>
                            <RadioItem>Salmon</RadioItem>
                            <RadioItem>Veg</RadioItem>
                          </RadioGroup>
                          <TextInput
                            label="Dietary Restrictions"
                            name={`groupDietaryRestrictions_${i}`}
                            disabled={!person?.group?.[i]?.isAttending}
                            size="small"
                          />
                        </div>
                      ))}
                    </div>
                  </fieldset>
                ) : (
                  <>
                    {person?.group?.length === 1 && (
                      <>
                        <RadioGroup
                          label={`Response for ${person?.group?.[0]?.name}:`}
                          name="groupIsAttending_0"
                          required
                          onChange={handleResponseChange}
                        >
                          <RadioItem value="Yes">Happily Accepts</RadioItem>
                          <RadioItem value="No">Regretfully Declines</RadioItem>
                        </RadioGroup>
                      </>
                    )}
                    {person?.hasPlusOne && (
                      <>
                        <RadioGroup
                          label="Will you be bringing a guest?"
                          name="plusOneIsAttending"
                          required
                          onChange={handleResponseChange}
                        >
                          <RadioItem>Yes</RadioItem>
                          <RadioItem>No</RadioItem>
                        </RadioGroup>
                        <TextInput
                          label="Guest Name:"
                          name="plusOneName"
                          placeholder="Betsy Ross"
                          disabled={!person?.plusOneIsAttending}
                          required={person?.plusOneIsAttending}
                        />
                      </>
                    )}
                    <RadioGroup
                      label="Meal Selection:"
                      name={person?.hasPlusOne ? 'plusOneMealOption' : 'groupMealOption_0'}
                      disabled={
                        person?.hasPlusOne
                          ? !person?.plusOneIsAttending
                          : !person?.group?.[0]?.isAttending
                      }
                      required={
                        person?.hasPlusOne
                          ? person?.plusOneIsAttending
                          : person?.group?.[0]?.isAttending
                      }
                    >
                      <RadioItem>Chicken</RadioItem>
                      <RadioItem>Salmon</RadioItem>
                      <RadioItem>Vegetarian</RadioItem>
                    </RadioGroup>
                    <TextInput
                      label="Dietary Restrictions:"
                      placeholder="e.g. Gluten free"
                      name={
                        person?.hasPlusOne
                          ? 'plusOneDietaryRestrictions'
                          : 'groupDietaryRestrictions_0'
                      }
                      disabled={
                        person?.hasPlusOne
                          ? !person?.plusOneIsAttending
                          : !person?.group?.[0]?.isAttending
                      }
                    />
                  </>
                )}
                <div className="pt-10">
                  <button
                    className="block relative w-full rounded-full border-1 leading-100 p-12 hover:bg-black hover:text-tan focus-visible:bg-black focus-visible:text-tan outline-none transition-colors duration-300 ease-in-out"
                    type="submit"
                  >
                    <div
                      className={classNames('transition-opacity', {
                        'opacity-0': loading,
                      })}
                    >
                      Submit
                    </div>
                    <div
                      className={classNames(
                        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 transition-opacity',
                        {
                          'opacity-0': !loading,
                        },
                      )}
                    >
                      <div className="animate-bounce [animation-duration:0.5s]">♥</div>
                    </div>
                  </button>
                </div>
              </form>
            )}
            {step === 3 && (
              <p className="text-25 text-center">
                {person?.isAttending ? (
                  <>
                    Thank you for confirming your attendance to our wedding celebration! We are
                    thrilled that you will be joining us on our special day.
                  </>
                ) : (
                  <>
                    Thank you for letting us know that you won't be able to attend our wedding
                    celebration. While we will miss your presence, we understand and appreciate your
                    response.
                  </>
                )}
              </p>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

function NameAutocomplete(props) {
  const inputRef = useRef(null)

  const [autocompleteState, setAutocompleteState] = useState({})

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        autoFocus: props.autoFocus,
        onStateChange({ state }) {
          setAutocompleteState(state)
        },
        getSources() {
          return [
            {
              sourceId: 'main',
              getItemInputValue({ item }) {
                return item.name
              },
              getItems({ query }) {
                return getAlgoliaResults({
                  searchClient,
                  queries: [
                    {
                      indexName: 'guest_list',
                      query,
                      params: {
                        hitsPerPage: 4,
                        highlightPreTag: '<mark>',
                        highlightPostTag: '</mark>',
                      },
                    },
                  ],
                })
              },
            },
          ]
        },
      }),
    [],
  )

  const handleBlur = useCallback(() => autocomplete.setIsOpen(false), [autocomplete])

  const handleKeyDown = useCallback(
    ev => {
      autocomplete.getInputProps({}).onKeyDown(ev)
      if (ev.key === 'Enter') {
        const id =
          autocompleteState?.collections?.[0]?.items?.[autocompleteState?.activeItemId]?.objectID
        if (id) {
          props?.onChange?.(id)
        }
      }
    },
    [autocompleteState, props?.onChange],
  )

  return (
    <div
      {...autocomplete.getRootProps({
        className: 'relative z-1',
      })}
    >
      <form
        {...autocomplete.getFormProps({ inputElement: inputRef.current, className: 'relative' })}
      >
        <label
          {...autocomplete.getLabelProps({
            className: classNames('block text-16 -tracking-1 leading-100 font-normal', {
              'opacity-50': props.loading,
            }),
          })}
        >
          Your Name:
          <input
            {...autocomplete.getInputProps({
              onBlur: handleBlur,
              onKeyDown: handleKeyDown,
              type: 'text',
              placeholder: 'Ben Franklin',
              className:
                'text-20 leading-150 -tracking-1 w-full block p-8 border-b-1 border-dashed outline-none bg-tan focus:border-solid',
              ref: inputRef,
            })}
          />
        </label>
        <div
          className={classNames(
            'absolute right-0 top-[45%] animate-bounce [animation-duration:0.5s] transition-opacity',
            {
              'opacity-0': !props.loading,
            },
          )}
        >
          ♥
        </div>
      </form>
      <div className="absolute inset-x-0 top-full" {...autocomplete.getPanelProps({})}>
        {autocompleteState.isOpen &&
          autocompleteState.collections.map(({ items, source }, i) => {
            return (
              <div key={`source-${i}`}>
                {items.length > 0 && (
                  <ul
                    key={source.sourceId}
                    {...autocomplete.getListProps({
                      className:
                        'bg-tan border-x-1 border-b-1 divide-y-1 rounded-b-7 overflow-hidden',
                    })}
                  >
                    {items.map((item, j) => (
                      <li key={item.objectID}>
                        <button
                          className={classNames(
                            'block w-full text-left px-8 py-5 hover:bg-black hover:text-tan',
                            {
                              'bg-black text-tan': autocompleteState.activeItemId === j,
                            },
                          )}
                          data-id={item.objectID}
                          {...autocomplete.getItemProps({
                            item,
                            source,
                            onClick: ev => {
                              autocomplete.getItemProps({ item, source }).onClick(ev)
                              props?.onChange?.(ev.currentTarget.dataset.id)
                            },
                          })}
                        >
                          {item.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          })}
      </div>
    </div>
  )
}

const RadioGroupContext = createContext()

function RadioGroup(props) {
  return (
    <fieldset
      className={classNames({
        'space-y-10': props?.size !== 'small',
        'space-y-5': props?.size === 'small',
        'opacity-50': props?.disabled,
      })}
    >
      <legend
        className={classNames('-tracking-1 font-normal', {
          'text-16 leading-100': props.size !== 'small',
          'text-14 leading-120': props.size === 'small',
        })}
      >
        {props.label}
      </legend>
      <div
        className={classNames('flex flex-wrap group', {
          'gap-x-15 gap-y-10': props?.size !== 'small',
          'gap-5': props?.size === 'small',
        })}
      >
        <RadioGroupContext.Provider value={props}>{props.children}</RadioGroupContext.Provider>
      </div>
    </fieldset>
  )
}

function RadioItem(props) {
  const { name, disabled, required, size, onChange } = useContext(RadioGroupContext)

  return (
    <label className="block">
      <input
        type="radio"
        className="sr-only peer"
        value={props?.value ?? props.children}
        name={name}
        disabled={disabled}
        onChange={onChange}
        required={required}
      />
      <div
        className={classNames(
          'border-1 -tracking-1 cursor-pointer peer-disabled:cursor-default select-none peer-checked:border-solid peer-checked:bg-black peer-checked:text-tan',
          {
            'border-dashed text-20 leading-150 p-10 rounded-7': size !== 'small',
            'border-dotted text-14 leading-120 px-8 py-5 rounded-4': size === 'small',
          },
        )}
      >
        {props.children}
      </div>
    </label>
  )
}

function TextInput({ label, size = 'large', ...rest }) {
  return (
    <label
      className={classNames('block -tracking-1 font-normal', {
        'text-16 leading-100': size !== 'small',
        'text-14 leading-120': size === 'small',
        'opacity-50': rest?.disabled,
      })}
    >
      {label}
      <input
        type="text"
        className={classNames(
          '-tracking-1 w-full block border-b-1 outline-none bg-tan focus:border-solid',
          {
            'text-20 leading-150 p-8 border-dashed': size !== 'small',
            'text-14 leading-120 pt-5 pb-2 border-dotted': size === 'small',
          },
        )}
        autoComplete="off"
        {...rest}
      />
    </label>
  )
}

async function wait(ms) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

async function chillFetch(url, { minDuration = 1500, ...fetchOptions } = {}) {
  const [data] = await Promise.all([
    fetch(url, fetchOptions).then(res => res.json()),
    wait(minDuration),
  ])

  return data
}
