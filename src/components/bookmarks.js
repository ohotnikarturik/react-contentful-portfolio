import React from "react";
import PropTypes from "prop-types";

const Bookmarks = ({ bookmarks}) => {
  return bookmarks.map((b) => (
    <div key={b.sys.id} className="max-w-xs mx-auto px-4 py-3 bg-white shadow-md rounded-md mt-8">
      <div>
        <span className="bg-indigo-200 text-indigo-800 px-3 py-1 rounded-full uppercase text-xs">
          {b.tagsCollection.items[0].title}
        </span>
        <h2 className="text-lg font-semibold text-gray-800 mt-2">
          {b.title}
        </h2>
        <p className="text-gray-600 text-sm mt-2">{b.comment}</p>
        <a
          href={b.url}
          className="text-blue-600 cursor-pointer mx-2 hover:underline"
        >
          Visit
        </a>
      </div>
    </div>
  ));
};

export default Bookmarks;
