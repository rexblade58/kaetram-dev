export default class Friend {
    public constructor(
        public id: number,
        public username: string,
        public online: boolean,
        public serverId: number
    ) {}
}

// auto-save crash recovery
