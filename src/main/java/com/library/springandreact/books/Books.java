package com.library.springandreact.books;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table
@JsonIgnoreProperties(ignoreUnknown = true)
public class Books {

    @Id
    @SequenceGenerator(name = "books_sequence", sequenceName = "books_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "books_sequence")
    private Long id;
    private String title;
    private String animePicture;
    private String startDate;

    public Books() {
    }

    public Books(Long id, String title, String animePicture, String startDate) {
        this.id = id;
        this.title = title;
        this.animePicture = animePicture;
        this.startDate = startDate;
    }

    public Books(String title, String animePicture, String startDate) {
        this.title = title;
        this.animePicture = animePicture;
        this.startDate = startDate;
    }

    public Long getId() {
        return this.id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getAnimePicture() {
        return this.animePicture;
    }

    public void setAnimePicture(String animePicture) {
        this.animePicture = animePicture;
    }

    public String getStartDate() {
        return this.startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    @Override
    public String toString() {
        return "{" + " id='" + getId() + "'" + ", title='" + getTitle() + "'" + ", animePicture='" + getAnimePicture()
                + "'" + ", startDate='" + getStartDate() + "'" + "}";
    }

}
