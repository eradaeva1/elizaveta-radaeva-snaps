import tagsData from "../../data/tags.json";



function FilterDrawer({ selectedTag, setSelectedTag }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const handleTagClick = (tag) => {
    if (selectedTag === tag) {
      setSelectedTag(null);
    } else {
      setSelectedTag(tag);
    }
  };

  return (
    <div className="filter__drawer">
      <button className="filter__drawer-cta" onClick={toggleDrawer}>
        {isDrawerOpen ? "Close Filters" : "Open Filters"}
      </button>
      {isDrawerOpen && (
        <div className="filter__drawer-content">
          {tagsData.map((tag, index) => (
            <button
              key={index}
              className={`filter-tag ${
                selectedTag === tag ? "filter__tag--selected" : ""
              }`}
              onClick={() => handleTagClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
export default FilterDrawer;
