module.exports = (str) => {
  return `SISLOC Logger ${new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  }).format(new Date())}: ${str}`
}
0575249aad7df25a363f237f7e57859db04f8574
