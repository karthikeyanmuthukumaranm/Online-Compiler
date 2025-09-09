// Tab switching
const tabs = document.querySelectorAll('.tab');
const containers = document.querySelectorAll('.editor-container');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    containers.forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});

// Run code in iframe
function runWebCode() {
  const html = document.getElementById('htmlCode').value;
  const css = `<style>${document.getElementById('cssCode').value}</style>`;
  const js = `<script>${document.getElementById('jsCode').value}<\/script>`;
  const output = document.getElementById('output');
  output.srcdoc = html + css + js;
}

// Dark/Light theme toggle
const toggleBtn = document.getElementById('toggleTheme');
toggleBtn.addEventListener('click', () => {
  const body = document.body;
  const isDark = body.classList.contains('dark');
  body.classList.toggle('dark', !isDark);
  body.classList.toggle('light', isDark);
  toggleBtn.textContent = isDark ? '🌙' : '🌞';
});
