export interface ITask {
    taskID: string;
    owner: string;
    title: string;
    subtitle: string;
    description: string;
    done: boolean;
    date: Date;
}
