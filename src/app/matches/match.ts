export interface Match {
    teamHome: {
        country:string,
        founded:number,
        national: boolean,
        logo: string,
        id: string,
        name: string
    },
    teamAway: {
        country:string,
        founded:number,
        national: boolean,
        logo: string,
        id: string,
        name: string
    },
    betHome:number,
    betDraw:number,
    betAway:number
    id:string,
    name: string,
    startDate: Date  
};
