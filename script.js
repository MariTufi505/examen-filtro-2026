// ============================================
// CHARACTER STATS
// ============================================
const name = "Zara Darkbane";
const characterClass = "Hechicera";
const level = 7;
let health = 80;
let mana = 120;
const attack = 45;
const defense = 30;

// ============================================
// FUNCTIONS
// ============================================

/**
 * Calculates damage based on attack and defense values
 * @param {number} attackValue - The attacker's attack power
 * @param {number} defenseValue - The defender's defense power
 * @returns {number} The damage dealt (minimum 0)
 */
function calculateDamage(attackValue, defenseValue) {
  const damage = attackValue - defenseValue;
  return damage > 0 ? damage : 0;
}

/**
 * Checks if the character is still alive
 * @param {number} currentHealth - The current health points
 * @returns {boolean} True if health is strictly greater than 0
 */
const isAlive = (currentHealth) => currentHealth > 0;

/**
 * Determines if a spell can be cast
 * @param {number} currentMana - Available mana points
 * @param {number} spellCost - Mana cost of the spell
 * @param {boolean} isStunned - Whether the character is stunned
 * @returns {boolean} True only if mana is sufficient AND character is not stunned
 */
const canCastSpell = (currentMana, spellCost, isStunned) => {
  return currentMana >= spellCost && !isStunned;
};

/**
 * Creates a character presentation string
 * @param {string} characterName - The character's name
 * @param {string} classType - The character's class
 * @param {number} characterLevel - The character's level
 * @returns {string} Formatted presentation string
 */
function getPresentation(characterName, classType, characterLevel) {
  return `${characterName} — ${classType} (Nivel ${characterLevel})`;
}

// ============================================
// FUNCTION CALLS AND OUTPUT
// ============================================

console.log("=== ZARA DARKBANE - STATS ===");
console.log(`Nombre: ${name}`);
console.log(`Clase: ${characterClass}`);
console.log(`Nivel: ${level}`);
console.log(`Salud: ${health}`);
console.log(`Mana: ${mana}`);
console.log(`Ataque: ${attack}`);
console.log(`Defensa: ${defense}`);

console.log("\n=== RESULTADOS DE FUNCIONES ===");

// calculateDamage() with declared variables
const damageDealt = calculateDamage(attack, defense);
console.log(`Daño calculado (Ataque ${attack} vs Defensa ${defense}): ${damageDealt}`);

// isAlive() with current health
const characterIsAlive = isAlive(health);
console.log(`¿Zara está viva? (Salud: ${health}): ${characterIsAlive}`);

// canCastSpell() with example parameters
const spellCost = 30;
const isStunned = false;
const canCast = canCastSpell(mana, spellCost, isStunned);
console.log(`¿Puede lanzar hechizo de ${spellCost} mana (Mana: ${mana}, Aturdida: ${isStunned})? ${canCast}`);

// getPresentation() with declared variables
const presentation = getPresentation(name, characterClass, level);
console.log(`Presentación: ${presentation}`);

// ============================================
// ADDITIONAL TEST CASES
// ============================================

console.log("\n=== CASOS DE PRUEBA ADICIONALES ===");

// Test calculateDamage with negative result
const lowDamage = calculateDamage(defense, attack);
console.log(`Daño si ataque es menor que defensa (${defense} vs ${attack}): ${lowDamage}`);

// Test isAlive with zero health
const aliveWithZero = isAlive(0);
console.log(`¿Está viva con 0 salud? ${aliveWithZero}`);

// Test canCastSpell when stunned
const canCastWhenStunned = canCastSpell(mana, spellCost, true);
console.log(`¿Puede lanzar hechizo estando aturdida? ${canCastWhenStunned}`);

// Test canCastSpell with insufficient mana
const canCastNoMana = canCastSpell(20, spellCost, false);
console.log(`¿Puede lanzar hechizo sin suficiente mana (20 < ${spellCost})? ${canCastNoMana}`);
