import { RateLimiterMemory } from 'rate-limiter-flexible';

/*-------------------------------*
//* CONFIGURATION DU RATE LIMITER
// - 5 tentatives max
// - Fenêtre glissante : 60 secondes
*-------------------------------*/
export const rateLimiter = new RateLimiterMemory({
  points: 5, // nombre de requetes autorisées
  duration: 60, // durée de la fenetre en seconde
});
