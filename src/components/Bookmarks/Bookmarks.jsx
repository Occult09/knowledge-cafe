import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-3 pt-3">
            <h3 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h3>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;