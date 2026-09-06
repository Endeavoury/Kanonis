
export const activateForm = (
  host: HTMLElement,
  internals: ElementInternals,
  type: 'button' | 'submit' | 'reset',
) => {
  const form = internals.form ?? host.closest('form');
  if (type === 'submit') form?.requestSubmit();
  if (type === 'reset') form?.reset();
};
