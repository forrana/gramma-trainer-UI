import gql from 'graphql-tag';
import { Query, QueryResult, OperationVariables } from 'react-apollo';
import React from 'react';

const GET_EXERCISES = gql`
  {
    exercises {
      id
      text
      done
    }
  }
`;

interface Exercis {
  id: number;
  text: string;
  done: boolean;
}

const ExercisesList: React.FC = () => (
  <Query query={GET_EXERCISES}>
    {({ loading, error, data } : QueryResult<any, OperationVariables>) => {
      if (loading) return 'Loading...';
      console.error(error);
      console.log(data);
      if (error) return `Error! ${error.message}`;

      return (
          // @ts-ignore
        <div name="exercises">
          {data.exercises.map((exercis: Exercis) => (
            <div key={exercis.id}>
              {exercis.text}; {exercis.done}
            </div>
          ))}
        </div>
      );
    }}
  </Query>
);

export default ExercisesList;
