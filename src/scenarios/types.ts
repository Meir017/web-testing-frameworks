

export interface Scenario {
    name: string;
    description: string;
    implementations: Implementation[];
    methods: string[];
    runner: new (implementation: Implementation) => Implementation;
}

export type Implementation = { name: string } & { [method: Exclude<string, 'name'>]: () => Promise<void> };