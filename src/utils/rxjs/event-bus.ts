/**
 * event-bus
 * @author guobin201314@gmail.com on 2019-05-19
 */
import { remove } from 'lodash';

export interface Observer {
    notify(data: any): void;
}

interface Subject {
    registerObserver(eventType: string, obs: Observer): void;
    unregisterObserver(eventType: string, obs: Observer): void;
    notifyObservers(eventType: string, data: any): void;
}

class EventBus implements Subject {
    private observers: { [key: string]: Observer[] } = {};

    notifyObservers(eventType: string, data: any): void {
        this.observersPreEventType(eventType).forEach((obs: Observer) => obs.notify(data));
    }

    registerObserver(eventType: string, obs: Observer): void {
        this.observersPreEventType(eventType).push(obs);
    }

    unregisterObserver(eventType: string, obs: Observer): void {
        remove(this.observersPreEventType(eventType), (el: Observer) => el === obs);
    }

    private observersPreEventType(eventType: string): Observer[] {
        const observerType = this.observers[eventType];
        if (!observerType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
}

export const eventBus = new EventBus();

