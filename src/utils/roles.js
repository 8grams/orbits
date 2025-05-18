export async function canPerformAction(userRole) {
  const ROLES = {
    viewer: ["view"],
    editor: ["create", "edit", "delete", "view"],
    admin: ["create", "edit", "delete", "view"],
  };
  const roleActions = ROLES[userRole] || [];
  return {
    canCreate: roleActions.includes("create"),
    canEdit: roleActions.includes("edit"),
    canDelete: roleActions.includes("delete"),
    canView: roleActions.includes("view"),
  };
}
