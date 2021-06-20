export default {
  addNewCoacdhe(context, payload) {
    const newOne = {
      id: 'c5',
      firstName: payload.firstName,
      lastName: payload.lastName,
      areas: payload.areas,
      description: payload.description,
      hourlyRate: payload.hourlyRate
    };
    context.commit('addNewCoache', newOne);
  }
};
