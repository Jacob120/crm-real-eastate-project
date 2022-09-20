export const getAccountingTable = ((state: any) => state.accountingData)

const accountingReducer = (statePart = [], action: any) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default accountingReducer;