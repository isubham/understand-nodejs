/**
 * stories for Devs
 * ================
 * 
 * taking account of maslow's law
 * {
 *
 * --
 * healthier, happier, successful
 * 
 * applying concepts of various frameworks
 * [
 * - atomic habbits
 * - gamification
 * - ...
 * ] 
 * 
 * this maybe extracted out as a execution engine
 * 
 * we have an area and that can be identified as 
 * a Skill
 * 
 * Each skill can have habbits which if done reqularly 
 * can give us skill points
 * 
 * a skill, which seems like a interconnected network
 * needs to be converted to a Directed Acyclic Graph
 * and that needs to be traversed 
 * traversal can happen in 2 ways Depth First  or breath first.
 * BFS seems more reasonable at most times because
 * for a particular level - Beginner, Intermediate or 
 * advanced we would want a level which is reasonable.
 * 
 * to build that DAG is the key.
 * - organically we get it from experience but we might just scratch the surface and go ahead 
 *   with it
 * - from following a book
 * - understanding a structure from official documentation
 * 
 */


// a person can have skill matrix. which is kind of recursive in nature.
// adding events and then computing at the view layer can help

// the skill matrix can be ranked as per stats 

/**
 * - https://www.simplypsychology.org/maslow.html
 * - https://canadacollege.edu/dreamers/docs/Maslows-Hierarchy-of-Needs.pdf 
 * - https://www.researchgate.net/publication/249964580_Maslow_and_the_Motivation_Hierarchy_Measuring_Satisfaction_of_the_Needs/link/5d6a0e0292851c85388065fc/download
 */

class MaslowOrderOfNeeds {

    constructor() {
        this.physiological = [
            'food', 
            'water', 
            'shelter', 
            'clothing',
            'sleep'
        ];

        this.safety = [
            'health',
            'employment',
            'property',
            'family',
            'social ability'
        ];

        this.loveAndBelonging = [
            'friendship',
            'family',
            'intimacy',
            'sense of connection',
        ];

        this.selfEsteem = [
            'confidence',
            'achievement',
            'respect of others',
            'the need to be unique indidual',
        ];

        this.selfActualization = [
            'morality',
            'creativity',
            'spontaneity',
            'acceptance',
            'experience purpose',
            'meaning',
            'inner potential'
        ];

        this.needsHierarchy = [
            this.physiological,
            this.safety,
            this.loveAndBelonging,
            this.selfEsteem,
            this.selfActualization
        ];

        this.deficiencyNeeds = [
            this.physiological,
            this.safety,
            this.loveAndBelonging,
            this.selfEsteem,
        ];

        this.growthNeeds = [
            this.selfActualization,
        ];

    }


    /**
     * this might give us the skills that we are 
     * looking for and we can model gamification 
     * based on that.
     *
     */

}

class Hero {
    constructor(skillMatrix, name) {

    }
}

class Skill {
    constructor(name, maxLevel) {
        this.name = name;
        this.maxLevel = maxLevel;
    }
}

class Quest {
    
    constructor(
        why,
        priority, 
        title,
        estimatedHours,
    ) {
        this.why = why;
        this.priority = priority;
        this.title = title;
        this.estimatedHours = estimatedHours;
    }

    /**
     * should return a set of datestimes which are sessions in which it needs to be executed
     */
    plan() {

    }

    /**
     * should take a session and do that thing in that session
     */
    execute(task) {
        
    }


}
