# Clinicaltrials.gov Module

A simple module for querying the clinicaltrials.gov database.

## Getting Started

### Installing

```
npm install --save clinical-trials-gov
```

### Usage

Read the full docs in [docs.md](https://github.com/arronhunt/clinical-trials-gov/blob/master/docs.md)

```js
const ClinicalTrials = require('clinical-trials-gov');

ClinicalTrials.search({condition: "Asthma"}).then(trials => {
    console.log(trials);
});
```

## Contributing

1. For this project.
2. Create a feature branch: `git checkout -b feature/my-feature`.
3. Push your branch `git push origin feature/my-feature`.
4. Submit a pull request.

## Authors

* **Arron Hunt** - *Initial work* - [arronhunt](https://github.com/arronhunt)

## License

This project is licensed under the MIT License.

## Acknowledgments

* Peter Tariche for his support.
