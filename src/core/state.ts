type StateAction<T> = (states: { prev: T; state: T }) => void;

interface StateEntity<T> {
  readonly data: T;
  readonly actions?: Array<StateAction<T>>;
}

export const createState = <T>({
  data: initialData,
  actions: initialActions = [],
}: StateEntity<T>) => {
  let isUpdating = false;
  let state = initialData;
  const actions = initialActions;

  return {
    read: () => state,

    update: async (updater: (state: T) => T | Promise<T>) => {
      if (isUpdating) {
        throw new Error('Cannot update state while it is being updated.');
      }

      isUpdating = true;
      const prevState = state;
      state = await updater(state);
      actions.forEach((action) => action({ prev: prevState, state: state }));
      isUpdating = false;
    },

    addAction: (action: StateAction<T>) => {
      actions.push(action);
    },

    removeAction: (action: StateAction<T>) => {
      const index = actions.indexOf(action);

      if (index > -1) {
        actions.splice(index, 1);
      }
    },
  };
};
