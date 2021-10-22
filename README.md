## Weather Dashboard<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Hello Bulma!</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
    />
  </head>
  <body>
    <header>
      <h1 class="title has-text-centered">Weather Dashboard</h1>
    </header>
    <main class="columns">
      <section class="sidebar column is-one-quarter is-narrow" id="city-search">
        <div>
          <form>
            <div class="field">
              <label class="label">Search for a City</label>
              <div class="control">
                <input class="input" type="text" placeholder="San Diego" />
              </div>
              <div class="control">
                <button class="button is-primary">Search</button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section class="column">
        <!-- Current City Weather   -->
        <section class="current-city" id="current-city">
          Current City Weather
        </section>
        <!--  Forecast  -->
        <section class="five-day-forecast" id="forecast">
          <header class="title">Five Day Forecast</header>
        </section>
      </section>
    </main>
  </body>
</html>
