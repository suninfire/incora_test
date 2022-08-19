import Subscription from "./Subscription";

export class User {
    constructor(subscriptions) {
        this.subscribtions = subscriptions;
}

subscribe(subscriptions,streamingService) {
       subscriptions.push(streamingService.name)
       return subscriptions
}
}
