var termynal = new Termynal('#termynal');
const terminal = document.getElementById('termynal');
function scrollToBottom() {
  terminal.scrollTop = terminal.scrollHeight;
}
setInterval(() => {
  scrollToBottom();
}, 10);
