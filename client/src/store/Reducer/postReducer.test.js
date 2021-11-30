import Reduces from './postReducer'

const mockPost={
    posts:{
        id: "61a4ab018ba40873e6e48c7e",
        firstName: "",
        lastName: "",
        gender: "",
        dob: null,
        address: "",
        email: "arun@gmail.com",
        createdAt: "2021-11-29T10:27:13.326Z",
        updatedAt: "2021-11-29T10:27:13.326Z",
        __v: 0
      },
      loading: false,
}
describe('Reducers', () => {
it('should handle POST reducer', () => {
    const startAction = {
      type: "POST",
      payload:{
        id: "61a4ab018ba40873e6e48c7e",
        firstName: "",
        lastName: "",
        gender: "",
        dob: null,
        address: "",
        email: "arun@gmail.com",
        createdAt: "2021-11-29T10:27:13.326Z",
        updatedAt: "2021-11-29T10:27:13.326Z",
        __v: 0
      }
    };

    expect(Reduces({}, startAction)).toEqual(mockPost);
  });

  it('should handle POST reducer', () => {
    const startAction = {
      type: "GET",
      payload:{
        id: "61a4ab018ba40873e6e48c7e",
        firstName: "",
        lastName: "",
        gender: "",
        dob: null,
        address: "",
        email: "arun@gmail.com",
        createdAt: "2021-11-29T10:27:13.326Z",
        updatedAt: "2021-11-29T10:27:13.326Z",
        __v: 0
      }
    };

    expect(Reduces({}, startAction)).toEqual(mockPost);
  })
})