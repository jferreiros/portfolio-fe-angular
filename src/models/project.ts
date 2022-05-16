export interface Project {
    id: number,
    dateStart: string,
    dateEnd: string | null,
    title: string,
    subject: string,
    img: string[] | null,
    tags: string[],
    description: string[],
    github: string | null ,
    deploy: string | null
}