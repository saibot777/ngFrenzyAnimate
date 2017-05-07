import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

export const markedTrigger = trigger('markedState', [
  state('default', style({
    border: '1px solid black',
    backgroundColor: 'transparent',
    padding: '20px'
  })),
  state('marked', style({
    border: '2px solid blue',
    backgroundColor: '#caeff9',
    padding: '19px'
  })),
  transition('default => marked', [
    style({
      border: '2px solid black',
      padding: '19px'
    }),
    animate('200ms ease-out', style({
      transform: 'scale(1.05)'
    })),
    animate(200)
  ]),
  transition('marked => default', [
    style({
      border: '1px solid blue',
      padding: '20px'
    }),
    animate('300ms ease-out')
  ]),
  // transition('marked => default', animate('300ms ease-out')),
]);

export const itemStateTrigger = trigger('itemState', [
  transition(':enter', [
    animate('500ms ease-out', keyframes([
      style({
        opacity: 0,
        transform: 'translateX(-100%)'
      }),
     style({
          opacity: 1,
          transform: 'translateX(15%)'
     }),
      style({
        opacity: 1,
        transform: 'translateX(0)'
      })
   ]))
  ]),
  transition(':leave', [
    style({
      opacity: 1,
      transform: 'translateX(0)'
    }),
    animate('500ms ease-out', keyframes([
      style({
        opacity:0,
        transform: 'translateX(-100%)'
      })
    ]))
  ])
]);
