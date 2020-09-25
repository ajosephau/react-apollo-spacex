import React, { Fragment, useState } from "react";
import { useQuery, useMutation, gql } from "@apollo/client";

import Launch from "./Launch";

const LAUNCHES = gql`
query launches {
    launches(limit: 10) {
      id
      mission_name
      upcoming
      launch_year
      launch_success
    }
  }
`;

const LaunchList = props => {
  const [state, setState] = useState({
    filter: "all",
    clearInProgress: false
  });

  const { launches } = props;

  return (
    <Fragment>
      <div className="todoListWrapper">
        <ul>{todoList}</ul>
      </div>

      <TodoFilters
        todos={filteredTodos}
      />
    </Fragment>
  );
};

const TodoPrivateListQuery = () => {
  const { loading, error, data } = useQuery(GET_MY_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Error!</div>;
  }
  return <TodoPrivateList todos={data.todos} />;
};
export default TodoPrivateListQuery;
export { GET_MY_TODOS };
