export function canPerformAction(userRole) {
  const permissions = {
    viewer: {
      jobs: ["view"],
      projects: ["view"],
      inventories: ["view"],
      playbooks: ["view"],
      ansible: [],
    },
    editor: {
      inventories: ["create", "view", "edit", "delete"],
      playbooks: ["create", "view", "edit", "delete"],
      projects: ["create", "view", "edit", "delete"],
      ansible: ["check"],
      jobs: ["view"],
    },
    maintainer: {
      inventories: ["create", "view", "edit", "delete"],
      playbooks: ["create", "view", "edit", "delete"],
      projects: ["create", "view", "edit", "delete"],
      ansible: ["check", "run"],
      jobs: ["create", "view", "edit", "delete"],
    },
    admin: {
      inventories: ["create", "view", "edit", "delete"],
      playbooks: ["create", "view", "edit", "delete"],
      projects: ["create", "view", "edit", "delete"],
      ansible: ["check", "run", "edit"],
      jobs: ["create", "view", "edit", "delete"],
    },
  };
  return permissions[userRole] || {};
}
