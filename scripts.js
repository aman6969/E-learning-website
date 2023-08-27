const courses = [
    {
        title: "Web Development Fundamentals",
        description: "Learn the basics of web development.",
        enrolled: 258,
    },
    {
        title: "Graphic Design Masterclass",
        description: "Master the art of graphic design.",
        enrolled: 131,
    },
    {
        title: "Introduction to Data Science",
        description: "Explore the world of data science and analytics.",
        enrolled: 98,
    },
    {
        title: "Mobile App Development with React Native",
        description: "Build mobile apps using React Native framework.",
        enrolled: 72,
    },
    {
        title: "Machine Learning for Beginners",
        description: "Dive into the fundamentals of machine learning.",
        enrolled: 183,
    },
    {
        title: "Photography Essentials",
        description: "Capture stunning photos with expert techniques.",
        enrolled: 55,
    },
    {
        title: "Artificial Intelligence Fundamentals",
        description: "Discover the principles of artificial intelligence.",
        enrolled: 126,
    },
    {
        title: "Business Finance and Investment",
        description: "Learn financial strategies for successful investments.",
        enrolled: 67,
    },
    {
        title: "Spanish Language Crash Course",
        description: "Quickly learn the basics of the Spanish language.",
        enrolled: 34,
    },
    {
        title: "Creative Writing Workshop",
        description: "Enhance your writing skills and creativity.",
        enrolled: 88,
    },
   
    
];

const courseCardsContainer = document.querySelector(".course-cards");

function displayCourses(courses) {
    courseCardsContainer.innerHTML = "";

    courses.forEach((course) => {
        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");
        courseCard.innerHTML = `
        <div class="course-image">
        <img src="${course.image || 'web_dev.png'}" alt="${course.title}">
    </div>
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <p>Enrolled: ${course.enrolled} learners</p>
    <button class="enroll-button">Enroll</button>
`;
courseCardsContainer.appendChild(courseCard);
        document.addEventListener("DOMContentLoaded", () => {
            const uploadButtons = document.querySelectorAll(".upload-button");
        
            uploadButtons.forEach((uploadButton) => {
                uploadButton.addEventListener("change", async (event) => {
                    const file = event.target.files[0];
                    if (file) {
                        const formData = new FormData();
                        formData.append("file", file);
        
                        try {
                            const response = await fetch("/upload", {
                                method: "POST",
                                body: formData,
                            });
        
                            if (response.ok) {
                                console.log("File uploaded successfully!");
                            } else {
                                console.error("Upload failed.");
                            }
                        } catch (error) {
                            console.error("An error occurred:", error);
                        }
                    }
                });
            });
        });
        
        
    });
}



displayCourses(courses);
