import React from "react";
import CardFun from "../jobCardItem/index";
const ListJobItems = ({ jobs }) => {
  console.log("ListJobItems", jobs.length);
  return (
    <div>
      {jobs.map((item) => {
        return (
          <CardFun
            key={item.id}
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
