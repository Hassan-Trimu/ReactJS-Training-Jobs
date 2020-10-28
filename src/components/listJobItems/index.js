import React from "react";
import JobCardItem from "../jobCardItem/index";
const ListJobItems = ({ jobs }) => {
  console.log("ListJobItems" + jobs.length);
  return (
    <div>
      {jobs.map((item) => {
        return (
          <JobCardItem
            key={item.id}
            id={item.id}
            title={item.title}
            companyName={item?.company?.name || ""}
            userEmail={item?.userEmail || ""}
            description={item.description}
          />
        );
      })}
    </div>
  );
};

export default ListJobItems;
