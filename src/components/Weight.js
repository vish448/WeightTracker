import React from "react";

export default function Weight({ weight, refreshWeights }) {
  /*const markCoursePurchased = async () => {
        try {
            await fetch('/api/weights', {
                method: 'PUT',
                body: JSON.stringify({ ...course, purchased: true }),
            });
            refreshCourses();
        } catch (err) {
            console.error(err);
        }
    };*/

  const deleteWeight = async () => {
    try {
      await fetch("/api/weights", {
        method: "DELETE",
        body: JSON.stringify({ id: weight.id }),
      });
      refreshWeights();
    } catch (err) {
      console.error(err);
    }
  };
  //console.table(weight.weight,weight.selectedDate)
  return (
    <>
      <div className="list-group-item added_weight">
          <h4 className="list-group-item-heading">{weight.weight}</h4>
          <p>{weight.selectedDate}</p>

        <button className="btn btn-sm btn-danger ml-2" onClick={deleteWeight}>
          Delete
        </button>
      </div>
    </>
  );
}
