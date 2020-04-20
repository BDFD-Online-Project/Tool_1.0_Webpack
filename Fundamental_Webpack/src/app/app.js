const alertService = new AlertService();
const componentService = new ComponentService();
const run = (alertService, componentService) => {
  alertService.hideErrors();
  componentService.onClick(() => {
    alertService.hideErrors();
    const inputs = componentService.getInput();
    const parsedInputs = parseInputs(...inputs);
    if (inputsAreValid(...parseInputs)) {
      const [numA, numB] = parsedInputs;
      componentService.setResult(numA, numB);
    } else {
      componentService.setResult("");
      alertService.hidenAdditionError(inputs, parsedInputs);
    }
  });
};
run(alertService, componentService);
