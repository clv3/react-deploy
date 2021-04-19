import React from "react";
import firebase from 'firebase/app';

export const PostList = ({ review }) => {


  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('reviews').doc(review.id).delete()
  }

  return (
    <>
      <div className="card card-content content box">
        <div className="box">{review.username} : {review.review}</div>
      <button className="button is-danger is-medium" onClick={onDelete}>Delete</button>
      </div>
    </>
  );
};