const state = {
  person: {
    firstname: 'Della',
    lastname: 'Duck',
    email: 'della.duck@aigles.be'
  },
  registerState: {
    entry: true,
    dinner: {
      pay: true,
      nbVegan: 1,
      nbVege: 0
    }
  },
  guest: [
    {
      firstname: 'Zaza',
      lastname: 'Vanderquack',
    },
    {
      firstname: 'Riri',
      lastname: 'Duck',
    }
  ]
};
/******************************************************/
{
  // Action : Mettre à jours l'email
  const action = {
    type: 'guest/update-email',
    payload: 'd.della@aigles.be'
  };

  // Reducer
  // - Oldschool
  const s1 = {
    ...state,
    person: {
      ...state.person,
      email: action.payload
    }
  };
  // - Avec immer
  state.person.email = action.payload;
}
/******************************************************/
{

  // Action : Mettre à jours le nom de plat
  const action = {
    type: 'guest/update-dinner',
    payload: {
      nbVege: 2,
      nbVegan: 0
    }
  };

  // Reducer
  // - Oldschool
  const s2 = {
    ...state,
    registerState: {
      ...state.registerState,
      dinner : {
        ...state.registerState.dinner,
        nbVege: action.payload.nbVege,
        nbVegan: action.payload.nbVegan,
      }
    }
  };
  // - Avec immer
  state.registerState.dinner.nbVegan = action.payload.nbVegan;
  state.registerState.dinner.nbVege = action.payload.nbVege;
}