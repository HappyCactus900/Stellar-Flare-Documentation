# Stellar Flare Catalog

Enter a TIC ID to filter the data:

<input type="text" id="ticInput" placeholder="Enter TIC ID">
<button onclick="filterData()">Filter</button>

<table id="catalogTable">
  <thead>
    <tr>
      <th>TIC</th>
      <th>Af</th>
      <th>Cal.Af</th>
      <th>delta t</th>
      <th>Cal.deltat</th>
      <th>Ef</th>
      <th>Cal.Ef</th>
      <th>ED1/ED2</th>
      <th>deltat1/deltat2</th>
      <th>tstart</th>
      <th>tpeak</th>
      <th>tend</th>
      <th>SNR</th>
    </tr>
  </thead>
  <tbody>
    <!-- Data will be populated here by JavaScript -->
  </tbody>
</table>

<script src="/docs/assets/script.js"></script>

