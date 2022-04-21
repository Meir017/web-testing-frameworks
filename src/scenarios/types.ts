

export interface Scenario {
    name: string;
    description: string;
    implementations: Implementation[];
    methods: string[];
}

export type Implementation = { name: string };