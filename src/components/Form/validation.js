function required(value) {
  let error = false;

  if (!value) {
    error = true;
  }

  return error;
}

export { required };
