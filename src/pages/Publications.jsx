import React, { useState, useMemo } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import "./Publications.css";

// Import extracted data
import {
  booksData,
  chaptersData,
  articlesData,
  conferencesData,
} from "../data/publicationsData";

const Publications = () => {
  const [activeTab, setActiveTab] = useState("books");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState([]);
  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  // --- SEARCH LOGIC ---
  const allData = useMemo(() => {
    return [
      ...booksData.map((d) => ({ ...d, category: "Book" })),
      ...chaptersData.map((d) => ({ ...d, category: "Chapter" })),
      ...articlesData.map((d) => ({ ...d, category: "Article" })),
      ...conferencesData.map((d) => ({ ...d, category: "Conference" })),
    ];
  }, []);

  const toggleFilter = (filterType) => {
    if (activeFilters.includes(filterType)) {
      setActiveFilters(activeFilters.filter((f) => f !== filterType));
    } else {
      setActiveFilters([...activeFilters, filterType]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setActiveFilters([]);
  };

  const filteredResults = useMemo(() => {
    if (!searchQuery && activeFilters.length === 0) return [];
    const lowerQuery = searchQuery.toLowerCase();
    return allData.filter((item) => {
      if (activeFilters.length > 0 && !activeFilters.includes(item.category))
        return false;
      if (!searchQuery) return true;
      const searchableText = `${item.title} ${item.authors} ${item.year} ${
        item.category
      } ${item.venue || ""} ${item.publisher || ""}`.toLowerCase();
      return searchableText.includes(lowerQuery);
    });
  }, [searchQuery, activeFilters, allData]);

  return (
    <>
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Scholarly Contributions</h1>
        <p className="center-text-sm">
          A curated collection of research works, books, and conference papers.
        </p>
      </section>

      {/* --- SEARCH BAR --- */}
      <div className="container fade-in-item is-visible search-section">
        <div className="search-box-wrapper">
          <div className="search-container">
            <div className="search-input-group">
              <i className="fa-solid fa-magnifying-glass search-icon"></i>
              <div className="search-chips-input">
                {activeFilters.map((f) => (
                  <span
                    key={f}
                    className={`search-chip chip-${f}`}
                    onClick={() => toggleFilter(f)}
                  >
                    {f} <i className="fa-solid fa-xmark"></i>
                  </span>
                ))}
                <input
                  type="text"
                  id="globalSearch"
                  placeholder="Search papers, books..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <button
                className={`filter-toggle-btn ${
                  isFilterMenuOpen ? "active" : ""
                }`}
                onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}
              >
                <i className="fa-solid fa-sliders"></i>
              </button>
            </div>
            <div className={`filter-menu ${isFilterMenuOpen ? "show" : ""}`}>
              <div className="filter-options">
                {["Book", "Chapter", "Article", "Conference"].map((type) => (
                  <button
                    key={type}
                    className={`filter-option ${
                      activeFilters.includes(type) ? "selected" : ""
                    }`}
                    onClick={() => toggleFilter(type)}
                  >
                    {type}s
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* --- CONTENT AREA --- */}
      {searchQuery || activeFilters.length > 0 ? (
        /* SEARCH RESULTS */
        <div className="container" style={{ display: "block" }}>
          <h3 className="section-subtitle">
            Search Results ({filteredResults.length})
          </h3>
          <div className="publication-list" id="search-results-list">
            {filteredResults.map((item) => (
              <Card
                key={item.id}
                className={`is-search-result search-result-${item.category}`}
                // FORCE VISIBILITY
                style={{ opacity: 1, transform: "none" }}
              >
                <span className="source-tag">{item.category}</span>
                <h5>{item.title}</h5>
                <p>{item.subtitle || item.venue || item.journal}</p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: "auto",
                  }}
                >
                  <span style={{ fontWeight: "800" }}>{item.year}</span>
                  {item.link && item.link !== "#" && (
                    <Button variant="text" href={item.link} target="_blank">
                      View
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
          <div className="center-text spacer-top-md">
            <Button variant="outline" onClick={clearSearch}>
              Back to Publications
            </Button>
          </div>
        </div>
      ) : (
        /* TABS VIEW */
        <>
          <div className="container fade-in-item is-visible">
            <div className="tabs-wrapper">
              {["books", "chapters", "articles", "conferences"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === "chapters"
                    ? "Book Chapters"
                    : tab === "articles"
                    ? "Journal Articles"
                    : tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* TAB 1: BOOKS */}
          {activeTab === "books" && (
            <section className="tab-content container active">
              <div className="modern-book-grid">
                {booksData.map((book) => (
                  <Card
                    key={book.id}
                    className="book-card-pro"
                    style={{
                      overflow: "visible",
                      opacity: 1,
                      transform: "none",
                    }} // Force visible
                  >
                    <div className="book-cover-container">
                      <div className="book-cover-3d">
                        <img
                          src={book.img}
                          alt={book.title}
                          onError={(e) =>
                            (e.target.src =
                              "https://placehold.co/300x450?text=Cover")
                          }
                        />
                      </div>
                    </div>
                    <div className="book-info-pro">
                      <div className="book-badges">
                        <span className="b-badge year">{book.year}</span>
                      </div>
                      <h4>{book.title}</h4>
                      <p className="b-subtitle">{book.subtitle}</p>
                      <div className="b-action">
                        {book.link !== "#" ? (
                          <Button
                            variant="text"
                            href={book.link}
                            target="_blank"
                          >
                            View Book{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 2: CHAPTERS */}
          {activeTab === "chapters" && (
            <section className="tab-content container active">
              <div className="chapter-grid">
                {chaptersData.map((chap) => (
                  <Card
                    key={chap.id}
                    className="chapter-card"
                    style={{ opacity: 1, transform: "none" }} // Force visible
                  >
                    <div className="chapter-img">
                      <img src={chap.img} alt="Cover" />
                    </div>
                    <div className="chapter-content">
                      <span className="pub-year-badge">{chap.year}</span>
                      <h5>{chap.title}</h5>
                      <p>
                        In <em>"{chap.book}"</em>
                      </p>
                      {chap.link && chap.link !== "#" && (
                        <Button variant="text" href={chap.link} target="_blank">
                          View
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 3: ARTICLES (FIXED) */}
          {activeTab === "articles" && (
            <section className="tab-content container active">
              <div className="publication-grid numbered-pub-grid">
                {articlesData.map((art) => (
                  <Card
                    key={art.id}
                    className="pub-item"
                    // CRITICAL FIX: Inline styles to force visibility
                    style={{ opacity: 1, transform: "none" }}
                  >
                    <div className="pub-header">
                      <span className="pub-year-badge">{art.year}</span>
                      <span className={`tag ${art.tag.toLowerCase()}`}>
                        {art.tag}
                      </span>
                    </div>
                    <div className="pub-content">
                      <h5>{art.title}</h5>
                      <p dangerouslySetInnerHTML={{ __html: art.journal }}></p>
                      <span className="pub-authors">{art.authors}</span>
                      <div
                        style={{
                          marginTop: "auto",
                          paddingTop: "1rem",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        {art.link && art.link !== "#" ? (
                          <Button
                            variant="text"
                            href={art.link}
                            target="_blank"
                            className="journal-link"
                          >
                            View Publication{" "}
                            <i className="fa-solid fa-arrow-right"></i>
                          </Button>
                        ) : (
                          <span
                            className="journal-link"
                            style={{ color: "#999" }}
                          >
                            Link N/A
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* TAB 4: CONFERENCES (FIXED) */}
          {activeTab === "conferences" && (
            <section className="tab-content container active">
              <div className="timeline-container">
                {conferencesData.map((conf, index) => {
                  const showYear =
                    index === 0 ||
                    conferencesData[index - 1].year !== conf.year;
                  return (
                    <React.Fragment key={conf.id}>
                      {showYear && (
                        <div className="timeline-year-marker">{conf.year}</div>
                      )}
                      <div
                        className="timeline-item"
                        // CRITICAL FIX: Inline styles to force visibility
                        style={{ opacity: 1, transform: "none" }}
                      >
                        <Card className="tl-content">
                          <div
                            className="tag-group"
                            style={{ marginBottom: "0.5rem" }}
                          >
                            <span
                              className={`tag ${
                                conf.tag.toLowerCase().includes("international")
                                  ? "international"
                                  : "national"
                              }`}
                            >
                              {conf.tag}
                            </span>
                          </div>
                          <h5>{conf.title}</h5>
                          <p className="tl-venue">
                            <i className="fa-solid fa-landmark"></i>{" "}
                            {conf.venue}
                          </p>
                          <p className="tl-meta">
                            <i className="fa-regular fa-calendar"></i>{" "}
                            {conf.date} |{" "}
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {conf.location}
                          </p>
                        </Card>
                      </div>
                    </React.Fragment>
                  );
                })}
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
};

export default Publications;
