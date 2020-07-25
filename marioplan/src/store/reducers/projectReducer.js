const initState = {
  projects: [
    {id: '1', title: 'help me find peach', content: 'blah blah blah'},
    {id: '2', title: 'Booom in reality', content: 'Oh no oh no oh no'},
    {id: '3', title: 'Bird is crashing', content: 'blah blah blah'}
  ]
}
const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case "CREATE_PROJECT" : 
      console.log('created project', action.project);
  }
  return state
}
export default projectReducer;