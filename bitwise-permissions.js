const PermissionsEnum = {
  READ: 1,
  WRITE: 2,
  UPDATE: 4,
  DELETE: 8,
  ADMINISTRATOR: 16,
};

const PermissionsEnumText = {
  READ: "Read",
  WRITE: "Write",
  UPDATE: "Update",
  DELETE: "Delete",
  ADMINISTRATOR: "Administrator",
};

const getPermissions = () => {
  const permissions = Object.entries(PermissionsEnum).map(([key, value]) => {
    return {
      title: PermissionsEnumText[key],
      name: key,
      flag: value,
    };
  });

  return permissions;
};
