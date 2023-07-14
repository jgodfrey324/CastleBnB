# CastleBnB
<!--!!END -->
<!--!!ADD -->
<!-- # `<name of application here>` -->
<!--!!END_ADD -->
CastleBnB is a full-stack web application for browsing and reserving castles from around the world, loosely based on AirBnB. This is a fun application filled with real castles from around the world and information blurbs about them in the descriptions!
Looking to incorporate the ability to reserve/book castles next. 

Some of the technologies used to create this project are: Javascript, Node.js, Express.js, Sequelize.js, React, HTML5, CSS3, Redux, PostgreSQL, GitHub

Check it out here: https://castlebnb-hcgv.onrender.com

## Database Schema Design

<!--!!START SILENT -->
![airbnb-database-schema]

[airbnb-database-schema]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/airbnb-db-schema.png
[airbnb-db-diagram-info]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/week-12/airbnb-db-diagram-info.txt
<!--!!END -->
<!--!!ADD -->
<!-- `<insert database schema design here>` -->
<!--!!END_ADD -->


## Wireframe and User Stories

### Landing page
* Any user is able to browse listings and see listing details when clicking on a listing.
  * A user may not leave a review or reserve a spot if not logged in
 
![Screen Shot 2023-07-10 at 12 19 38 PM](https://github.com/jgodfrey324/CastleBnB/assets/122331146/dbd2550a-61e2-4f93-b087-8d924cc955a3)

### Spot details
* Any user can browse the spot details and reviews of a listing
  * Only logged in users can reserve and leave a review
  * If logged in user owns the spot, they may not leave a review
 
![Screen Shot 2023-07-10 at 12 22 07 PM](https://github.com/jgodfrey324/CastleBnB/assets/122331146/f9b60c89-e485-424c-b4aa-b021773accd5)

### Manage spots
* A logged in user is able to manage the spots they've listed from the profile drop down button
* A logged in user can click to see the details of their spot, create a new spot, delete or update a spot from here

![Screen Shot 2023-07-10 at 12 24 30 PM](https://github.com/jgodfrey324/CastleBnB/assets/122331146/7c3118e4-ea6b-47a5-a38a-b11c8967e955)

### Creating a new spot
* A logged in user can list a new spot by filling out this form

![Screen Shot 2023-07-10 at 12 26 19 PM](https://github.com/jgodfrey324/CastleBnB/assets/122331146/6052cdb9-edca-463a-8f51-dd22da2d52de)

### Posting a review
* A logged in user can post a review with a star rating to any spot

![Screen Shot 2023-07-10 at 12 27 26 PM](https://github.com/jgodfrey324/CastleBnB/assets/122331146/04f211ed-f43c-4cb0-8da8-132b803a376c)


## Future Features:
* A user will be able to reserve a spot
* A review will have a flag with whether or not the user has stayed at this spot before
* Google location implementation
* Ability to search a spot
