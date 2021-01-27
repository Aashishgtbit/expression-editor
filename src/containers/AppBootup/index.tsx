import React from "react";
import AppRoutes from "../../routes";
import configureStore from "../../store/index";
import { Provider } from "react-redux";
const { store } = configureStore();
function AppBootUp() {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
}

export default AppBootUp;
