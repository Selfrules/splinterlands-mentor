// server.js
const express = require('express');
const mongoose = require('mongoose');
const Rule = require('./src/models/Rule');
const Ability = require('./src/models/Ability');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


// Connetti al tuo database MongoDB
mongoose.connect('mongodb://localhost/splinterlands', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Endpoint per creare una nuova regola
app.post('/api/rules', async (req, res) => {
  const newRule = new Rule(req.body);
  await newRule.save();
  res.status(201).json(newRule);
});

// Endpoint per aggiornare una regola esistente
app.put('/api/rules/:id', async (req, res) => {
  try {
    const updatedRule = await Rule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updatedRule) {
      res.status(404).json({ message: 'Rule not found' });
    } else {
      res.json(updatedRule);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error updating rule', error });
  }
});

// Endpoint per creare una nuova abilità
app.post('/api/abilities', async (req, res) => {
  const newAbility = new Ability(req.body);
  await newAbility.save();
  res.status(201).json(newAbility);
});

// Endpoint per ottenere tutte le regole
app.get('/api/rules', async (_req, res) => {
    try {
      const rules = await Rule.find().populate('abilitiesToUse').populate('abilitiesNotToUse');
      res.json(rules);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching rules', error });
    }
  });


// Endpoint per ottenere tutte le abilità
app.get('/api/abilities', async (_req, res) => {
  const abilities = await Ability.find();
  res.json(abilities);
});

// Implementa gli altri endpoint per la modifica e l'eliminazione delle regole e abilità

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});