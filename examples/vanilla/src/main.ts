import '@endeavoury/kanonis/styles.css';
import '@endeavoury/kanonis/button';
import '@endeavoury/kanonis/forms';
import '@endeavoury/kanonis/display';
import '@endeavoury/kanonis/feedback';
import '@endeavoury/kanonis/layout';

document.querySelector('main')!.innerHTML = `
  <kanonis-container size="narrow">
    <kanonis-stack gap="6">
      <kanonis-page-header eyebrow="Vanilla example" heading="No framework required" description="These are the same shipped custom elements used by React, Angular, and Storybook."></kanonis-page-header>
      <form id="profile-form">
        <kanonis-stack>
          <kanonis-input name="name" label="Display name" value="Vanilla consumer" required></kanonis-input>
          <kanonis-checkbox name="updates" checked>Receive updates</kanonis-checkbox>
          <kanonis-button type="submit">Save profile</kanonis-button>
        </kanonis-stack>
      </form>
      <kanonis-alert id="result" tone="success" heading="Ready">Submit the native form to verify ElementInternals.</kanonis-alert>
    </kanonis-stack>
  </kanonis-container>`;
document.querySelector('#profile-form')!.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget as HTMLFormElement);
  document.querySelector('#result')!.textContent =
    `Submitted: ${JSON.stringify(Object.fromEntries(data))}`;
});
