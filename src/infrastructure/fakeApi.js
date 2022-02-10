const courseData = [
    {
        id: "WoXLy6x",
        name: "Alpha Course Spring",
        hostId: 1,
        adminMessage: "Hello, we will gather every Wednesday from 7:00 - 9:30 pm"
    },
    {
        id: "x60lb6B",
        name: "August Alpha Session",
        hostId: 2,
        adminMessage: "Welcome to our August Alpha meeting hosted online"
    },
    {
        id: "ZZm8f63",
        name: "Friday Night Alpha!",
        hostId: 5,
        adminMessage: "What better way to spend your weekend than chatting with friends."
    }
]

const userData = [
    {
        userId: 1,
        name: "Daniel LaRusso",
        alphaCourses: [
            "WoXLy6x",
            "x60lb6B",
            "ZZm8f63"
        ]
    },
    {
        userId: 2,
        name: "Johnny Lawrence",
        alphaCourses: [
            "ZZm8f63",
            "x60lb6B"
        ]
    },
    {
        userId: 3,
        name: "Mr. Miyagi",
        alphaCourses: [
            "WoXLy6x"
        ]
    },
    {
        userId: 4,
        name: "Ali Mills",
        alphaCourses: [
            "x60lb6B"
        ]
    },
    {
        userId: 5,
        name: "Lucille LaRusso",
        alphaCourses: [
            "ZZm8f63"
        ]
    },
    {
        userId: 6,
        name: "John Kreese",
        alphaCourses: [
            "WoXLy6x",
            "ZZm8f63"
        ]
    }
]

const getCourses = () => {
    return courseData;
}

const getCourse = (id) => {
    return courseData.find(course => course.id === id);
}

const getUsers = () => {
    return userData;
}

const getUser = (id) => {
    return userData.find(user => user.id === id);
}

const getParticipantsForCourse = (courseId) => {
    return userData.filter(user => user.alphaCourses.indexOf(courseId) > -1)
}

export const api = {
    getCourse,
    getCourses,
    getUser,
    getUsers,
    getParticipantsForCourse
}

export default api;