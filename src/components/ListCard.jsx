import React from "react";
import "./ListCard.css";

function ListCard() {
  return (
    <div className="card" style={{ height: "20rem  ", width: "18rem" }}>
      <div style={{ fontSize: 20 }}>Monthly Training Activity</div>
      <div className="sub-head-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75"
          />
        </svg>
        <div className="sub-head-text">16% more enrollees this month</div>
      </div>
      <div className="list-container">
        <div className="list-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <strong>course a</strong>
        </div>
        <div className="list-details">
          23 Workers Took This Course This Week.
        </div>
      </div>
      <div className="list-container">
        <div className="list-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <strong>course b</strong>
        </div>
        <div className="list-details">
          235 Workers Took This Course This Week.
        </div>
      </div>
      <div className="list-container">
        <div className="list-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <strong>course c</strong>
        </div>
        <div className="list-details">
          235 Workers Took This Course This Week.
        </div>
      </div>
      <div className="list-container">
        <div className="list-heading">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <strong>course d</strong>
        </div>
        <div className="list-details">
          235 Workers Took This Course This Week.
        </div>
      </div>
    </div>
  );
}

export default ListCard;
