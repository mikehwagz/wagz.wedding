module.exports = {
  classList: (...all) => all.filter((c) => !!c).join(' '),
  debug: (value) =>
    `<pre style="padding: 100px 10px; font-size: 14px; font-family: monospace; overflow-x: auto;">${JSON.stringify(
      value,
      null,
      2,
    )}</pre>`,
  timestamp: () => new Date().getTime(),
}
