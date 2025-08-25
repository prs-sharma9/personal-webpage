export type SkillDetail = {
    topic: string;
    level: number;
}

export type SkillCategory = {
    title: string;
    detail: SkillDetail[];
}

export type SkillsObject = {
    category: string;
    value: SkillCategory[];
}

export const skills : SkillsObject = {
    category: 'Technical Skills',
    value: [
        {
            title: 'Android',
            detail: [
                {
                  topic: 'Jetpack Compose',
                    level: 4,  
                },
                {
                    topic: 'Room',
                    level: 4,
                },
                {
                    topic: 'MVVM',
                    level: 4,
                },
            ]
        },
        {
            title: 'Frontend',
            detail: [
                {
                    topic: 'React',
                    level: 3.5,
                },
                {
                    topic: 'Javascript',
                    level: 5,
                },
                {
                    topic: 'React Native',
                    level: 3,
                }
            ]
        },
        {
            title: 'Database',
            detail: [
                {
                    topic: 'MySQL',
                    level: 4,
                },
                {
                    topic: 'MongoDB',
                    level: 3.5,
                },
                {
                    topic: 'Postgrace',
                    level: 2,
                }
            ]
        }
    ]
}