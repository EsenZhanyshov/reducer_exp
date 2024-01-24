import React, { useContext, useEffect } from "react";
import { UsersContext } from "../context/UsersContextProvider";
import { Link } from "react-router-dom";

const UsersPage = () => {
  const { getUsers, users, getPosts, posts } = useContext(UsersContext);
  useEffect(() => {
    getUsers();
    getPosts();
  }, []);
  // users?.map((elem) => {
  //   console.log(elem);
  // });
  return (
    <div className="wrapper">
      <div className="block__cards">
        {users.map((elem) => (
          <div className="card" key={elem.id}>
            <p className="card__text">name: {elem.name}</p>
            <p className="card__text">username: {elem.username}</p>
            <p className="card__text">email: {elem.email}</p>
            <p className="card__text">phone: {elem.phone}</p>
            <p className="card__text">company: {elem.company.name}</p>
            <div className="card__btn btn">
              <Link className="card__link link" to={`/users/${elem.id}`}>
                Detail
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
// ! Если что доделаю,
// getPhotos, photos
{
  /* {photos.map((elem) => (
        <img src={elem.thumbnailUrl} alt="" />
      ))} */
}
