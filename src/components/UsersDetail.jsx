import React, { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContextProvider";
import { Link, useParams } from "react-router-dom";

const UsersDetail = () => {
  const { getUsers, users, getPosts, posts, getOneUser, user } =
    useContext(UsersContext);
  const { id } = useParams();
  useEffect(() => {
    // getUsers();
    getPosts();
    getOneUser(id);
  }, []);
  console.log(user);
  posts?.map((elem) => {
    console.log(elem);
  });
  return (
    <div className="wrapper">
      <div className="section">
        <div className="section__btn btn">
          <Link className="section__link link" to={`/users`}>
            Cancel
          </Link>
        </div>
        <h3 className="section__title">{user.name}, posts!</h3>
        {posts?.map((elem) => {
          return elem.userId == id ? (
            <div key={elem.id} className="section__block">
              <div className="block-left">
                <h3 className="block__title">{elem.title}</h3>
              </div>
              <div>
                <h3>{elem.title}</h3>
              </div>
            </div>
          ) : (
            <React.Fragment key={elem.id}></React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default UsersDetail;
